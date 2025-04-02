import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { _id, title, author, image_url, details } = news;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ?
                    <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 text-bold" >Read More...</Link></p>
                    :
                    details
                }
                <div className="card-actions justify-end">
                    {/* there were a button */}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;