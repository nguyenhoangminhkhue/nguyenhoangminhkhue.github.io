// Tìm kiếm địa điểm
document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const attractions = document.querySelectorAll('#attractions ul li');
let found = false;

attractions.forEach(attraction => {
    const name = attraction.textContent.toLowerCase();
    if (name.includes(searchValue)) {
        attraction.style.display = 'block';
        found = true;
    } else {
        attraction.style.display = 'none';
    }
});

if (!found) {
    alert("No attractions found!");
}

});

// Bình luận
document.getElementById('submit-comment').addEventListener('click', function() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentList = document.getElementById('comments-list');
        const comment = document.createElement('p');
        comment.textContent = commentText;
        commentList.appendChild(comment);
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
});
