import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

import Modal from "../../../components/Modal";
import PostList from "../../../components/Admin/Blog/PostList";
import Pagination from "../../../components/Pagination";

import { getPostsApi } from "../../../api/post";

import "./Blog.scss";

function Blog(props) {
    const { location, history } = props;
    const [posts, setPosts] = useState(null);
    const [reloadPosts, setReloadPosts] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const { page = 1 } = queryString.parse(location.search);

    useEffect(() => {
        getPostsApi(5, page)
            .then((response) => {
                if (response?.code !== 200) {
                    notification["warning"]({
                        message: response.message,
                    });
                } else {
                    setPosts(response.posts);
                }
            })
            .catch((err) => {
                notification["error"]({
                    message: "Error del servidor",
                });
            });

        setReloadPosts(false);
    }, [page]);

    if (!posts) {
        return null;
    }

    return (
        <div className="blog">
            <div className="blog__add-post">
                <Button type="primary">Nuevo Post</Button>
            </div>

            <PostList posts={posts} />

            <Pagination posts={posts} location={location} history={history} />

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width="75%"
            />
        </div>
    );
}

export default withRouter(Blog);
