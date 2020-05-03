import React from 'react';
import { getCourseDataUdemyApi } from '../../../../api/course';

export default function CoursesList(props) {
    const { courses, setReloadCourses } = props;

    if (courses.length > 0) {
        courses.forEach(course => {
            getCourseDataUdemyApi(course.id)
                .then(response => {
                    console.log(response);
                })
        });
    }

    return (
        <div>
            <h1>CoursesList ...</h1>
        </div>
    );
}
