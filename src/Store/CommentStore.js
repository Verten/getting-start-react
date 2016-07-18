/**
 * Created by ebinhon on 3/3/2016.
 */
import alt from '../alt';
import CommentAction from '../Action/CommentAction';
import BaseStore from './BaseStore';

class CommentStore extends BaseStore {
    constructor() {
        super();
        this.state = {
            "comments":[]
        };
        // Binds the CommentStore methods to their 'on' equivalents
        this.bindActions(CommentAction);
    }

    //we can change comments in other class
    static addComment(){
        this.state.comments.push(
            {
                "author": "hongbin2",
                "data": "this is a nice framework"
            }
        );
    }
}

export default alt.createStore(CommentStore, 'CommentStore');