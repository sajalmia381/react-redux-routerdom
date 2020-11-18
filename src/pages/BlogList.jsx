import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import {blogAction} from '../services/actions/blogAction'

const BlogList = () => {

    const [loading, blogs, error] = useSelector((state) => ([
        state.blogReducer.loading,
        state.blogReducer.blogs,
        state.blogReducer.error,
    ]))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(blogAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(loading, error)
    
    return <div className="container-fluid mt-5">
            <div className="row">
                {loading ? <h2 className="text-center">Loading ...</h2> : error ? <h3>{error}</h3>: 
                        blogs.map((obj) => {
                            return <div kye={obj.text} className="col-lg-3 col-md-4 col-sm-6 mt-3">
                                    <div className="card">
                                        <img src={obj.image} className="card-img-top" alt={obj.text} />
                                    <div className="card-body">
                                        <h5 className="card-title">{obj.text}</h5>
                                        <h6><strong>Likes:</strong>{obj.likes} <strong>Published</strong> {obj.publishDate}</h6>
                                        <Link to={`/blogs/${obj.id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                    })
                }
        </div>
    </div>
}

export default BlogList