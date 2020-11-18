import {useEffect} from 'react'

import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'


import {singleBlog} from '../services/actions/singleBlog'



const SingleBlog = ({singleBlog, blog, loading, error}) => {
    const {id} = useParams()
    useEffect(() => {
        singleBlog(id)
    }, []);
    return <div className="container-fluid mt-5">
    <div className="row">
        {loading ? <h2 className="text-center">Loading ...</h2> : error ? <h3>{error}</h3>: <div className="jumbotron">
                    <img src={blog.image} className="img-fluid" alt="Responsive image" />
                    <h3 className="display-4">{blog.text}</h3>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    </p>
              </div>
        }
    </div>
</div>
}

const mapStateToProps = state => ({
    blog: state.singleBlog.blog,
    loading: state.singleBlog.loading,
    error: state.singleBlog.error,
})


export default connect(mapStateToProps, {singleBlog})(SingleBlog)