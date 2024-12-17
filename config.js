const blogConfig = {
    title: "~/posts",
    navigation: [
        { name: "home", path: "/", type: "folder" },
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
];

export { blogConfig, posts };
