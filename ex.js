const comments =[
    {
        id: 1,
        value: 'first comment',
        commentIds: [2, 3]
    },

    {
        id: 2,
        value: 'second comment',
        commentIds: [4,5]
    },

    {
        id: 3,
        value: 'third comment',
        commentIds: []
    },

    {
        id: 4,
        value: 'fourth comment',
        commentIds: [6]
    },
    {
        id: 5,
        value: 'Fifth comment',
        commentIds: []
    },
    {
        id: 6,
        value: 'Sixth comment',
        commentIds: []
    },
    {
        id: 7,
        value: 'Seventh comment',
        commentIds: []
    }



];

const getChildrens = (commentList, comment) => {
    let commentIds = comment.commentIds;
    if(!commentIds || commentIds.length === 0){
        return [];
    }

    const comments = [];
    commentIds.forEach(commentId => {
        comment = commentList.filter(comment => comment.id === commentId)[0];
        comment.comments = getChildrens(commentList, comment);
        delete comment.commentIds;

        //Move comment from array to its parrent's comments list
        commentList.splice(commentList.indexOf(comment), 1);
        comments.push(comment);
    });
    return comments;
}

const buildTree = (comments) =>{
    const localComments = [...comments];
    const commentsWithTheirComments = [];

    while(localComments.length > 0){
        const comment = localComments.shift();
        const commentsOfComment = getChildrens(localComments, comment);
        delete comment.commentIds;
        comment.comments = commentsOfComment;
        commentsWithTheirComments.push(comment);
    }
    return commentsWithTheirComments;
}


buildTree(comments);



