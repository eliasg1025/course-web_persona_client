import React, { useState, useEffect } from "react";
import moment from "moment";
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import { Editor } from "@tinymce/tinymce-react";

import { getAccessTokenApi } from "../../../../api/auth";

import "./AddEditPostForm.scss";
import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";

export default function AddEditPostForm({
    setIsVisibleModal,
    setReloadPosts,
    post,
}) {
    const [postData, setPostData] = useState({});

    useEffect(() => {
        if (post) {
            setPostData(post);
        } else {
            setPostData({});
        }
    }, [post]);

    return (
        <div className="add-edit-post-form">
            <AddEditForm
                postData={postData}
                setPostData={setPostData}
                post={post}
            />
        </div>
    );
}

function AddEditForm({ postData, setPostData, post }) {
    return (
        <Form className="add-edit-post-form" layout="inline">
            <Row gutter={24}>
                <Col span={8}>
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Titulo"
                        // value={}
                        // onChange={}
                    />
                </Col>
                <Col span={8}>
                    <Input
                        prefix={<LinkOutlined />}
                        placeholder="url"
                        // value={}
                        // onChange={}
                    />
                </Col>
                <Col span={8}>
                    <DatePicker
                        style={{ width: "100%" }}
                        format="DD/MM/YYYY HH:mm:ss"
                        placeholder="Fecha de publicacion"
                        showTime={{
                            defaultValue: moment("00:00:00", "HH:mm:ss"),
                        }}
                        // value={}
                        // onChange={}
                    />
                </Col>
            </Row>

            <Editor
                value=""
                init={{
                    height: 400,
                    menubar: true,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                        "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
                }}
                // onEditorChange={this.handleEditorChange}
            />
        </Form>
    );
}
