import React from 'react'

const Sub = ({marks}) => {
    return (
        <div>
           <button type="button" className="btn btn-primary btn-lg px-4 my-4" data-toggle="modal" data-target="#myModal">Submit Quiz</button>

            <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
            
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Your Score :</h4>
                </div>
                <div className="modal-body">
                    <h1 style={{"textAlign" : "center"}}>{marks.reduce((a,b) => a+b,0)}/10</h1>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
                
            </div>
            </div>

            <br/>
        </div>
    )
}

export default Sub
