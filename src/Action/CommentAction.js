/**
 * Created by ebinhon on 3/3/2016.
 */
import alt from '../alt';
import xhr from '../Util/xhr';

class CommentAction {

    constructor() {
        // This is a shorthand for actions that only dispatch a single value
        this.generateActions(
            'dataReceived', //will execute 'onDataReceived' method in BaseStore
            'dataError' //will execute 'onDataError' method in BaseStore
        );
    }

    loadData(path) {
        let promise = xhr.loadData(path).then((response) => {
            this.dataReceived(JSON.parse(response));
        }).catch(function(error) {
            this.dataError(error);
        });
        return promise;
    }
}

export default alt.createActions(CommentAction);