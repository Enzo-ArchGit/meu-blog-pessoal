document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');
    const posts = [
        { title: 'Meu Primeiro Post', content: 'Este é o conteúdo do meu primeiro post.' },
        { title: 'Como Usar Git', content: 'Um guia básico sobre como usar Git.' }
    ];

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postsList.appendChild(listItem);
    });
});
