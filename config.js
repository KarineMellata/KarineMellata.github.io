const blogConfig = {
    title: "~/posts",
    navigation: [
        { name: "home", path: "index.html", type: "folder" },
        { name: "posts", path: "posts/index.html", type: "folder" },
        { name: "about", path: "about.html", type: "file", extension: "txt" }
    ]
};

// Add new posts here
const posts = [
    {
        date: '2024-12-16',
        title: 'void-thoughts',
        path: 'thoughts/void-thoughts.html',
        category: 'thoughts'
    },
    {
        date: '2024-12-14',
        title: 'signal-received',
        path: 'signals/signal-received.html',
        category: 'signals'
    }
];

export { blogConfig, posts };
