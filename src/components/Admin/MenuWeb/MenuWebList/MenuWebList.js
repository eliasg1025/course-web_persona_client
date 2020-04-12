import React, { useState, useEffect } from 'react';

export default function MenuWebList(props) {
    const { menu, setReloadMenu } = props;

    let menu1 = [
        {_id: 'dadasdsa', title: 'Blogs'},
        {_id: 'dasdasaa', title: 'Cursos'}
    ]

    return (
        <div>
            <h1>MenuWebList</h1>
            {
                menu1.map(item => (
                    <p key={item._id}>{item.title}</p>
                ))
            }
        </div>
    );
}
