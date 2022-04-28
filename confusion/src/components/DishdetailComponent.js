import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderComments(comments){
        if(comments == null){
            return(<div></div>)
        }else{
            const comm = comments.map((c)=>{
                return (
                    <li key={c.id}>
                        <div className="row-content">
                            {c.comment}
                        </div>
                        <br></br>
                        <div className="row-content">
                            {"-- "+c.author+" , "+c.date.slice(0,10)}
                        </div>
                        <br></br>
                    </li>
                );
            });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comm}
                </ul>
            </div>
        );
        }
    }

    renderDish(dish){
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>    
        );
    }

    render(){
        if(this.props.selectedDish != null){
            return(
                <div className="row">
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)}
                </div>)
            }else{
                return(
                    <div></div>
                );
            }
    }
}

export default DishDetail;