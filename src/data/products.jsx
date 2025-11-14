const products = [
  { id: 1, title: "accusamus beatae ad facilis cum similique qui sunt", thumbnailUrl: "https://placehold.co/286x180/FF5733/FFFFFF" },
  { id: 2, title: "reprehenderit est deserunt velit ipsam", thumbnailUrl: "https://placehold.co/286x180/33FF57/FFFFFF" },
  { id: 3, title: "officia porro iure quia iusto qui ipsa ut modi", thumbnailUrl: "https://placehold.co/286x180/3357FF/FFFFFF" },
  { id: 4, title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae", thumbnailUrl: "https://placehold.co/286x180/FF33A1/FFFFFF" },
  { id: 5, title: "natus nisi omnis corporis facere molestiae rerum in", thumbnailUrl: "https://placehold.co/286x180/33FFF7/FFFFFF" },
  { id: 6, title: "accusamus ea aliquid et amet sequi nemo", thumbnailUrl: "https://placehold.co/286x180/F7FF33/FFFFFF" },
  { id: 7, title: "officia delectus consequatur vero aut veniam explicabo molestias", thumbnailUrl: "https://placehold.co/286x180/FF8C33/FFFFFF" },
  { id: 8, title: "aut porro officiis laborum odit ea laudantium corporis", thumbnailUrl: "https://placehold.co/286x180/8C33FF/FFFFFF" },
  { id: 9, title: "qui eius qui autem sed", thumbnailUrl: "https://placehold.co/286x180/33FF8C/FFFFFF" },
  { id: 10, title: "beatae et provident et ut vel", thumbnailUrl: "https://placehold.co/286x180/FF3380/FFFFFF" },
  { id: 11, title: "nihil at amet non hic quia qui", thumbnailUrl: "https://placehold.co/286x180/3380FF/FFFFFF" },
  { id: 12, title: "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores", thumbnailUrl: "https://placehold.co/286x180/80FF33/FFFFFF" },
  { id: 13, title: "repudiandae iusto deleniti rerum", thumbnailUrl: "https://placehold.co/286x180/FF5733/FFFFFF" },
  { id: 14, title: "est necessitatibus architecto ut laborum", thumbnailUrl: "https://placehold.co/286x180/33FF57/FFFFFF" },
  { id: 15, title: "harum dicta similique quis dolore earum ex qui", thumbnailUrl: "https://placehold.co/286x180/3357FF/FFFFFF" },
  { id: 16, title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt", thumbnailUrl: "https://placehold.co/286x180/FF33A1/FFFFFF" },
  { id: 17, title: "natus doloribus necessitatibus ipsa", thumbnailUrl: "https://placehold.co/286x180/33FFF7/FFFFFF" },
  { id: 18, title: "laboriosam odit nam necessitatibus et illum dolores reiciendis", thumbnailUrl: "https://placehold.co/286x180/F7FF33/FFFFFF" },
  { id: 19, title: "perferendis nesciunt eveniet et optio a", thumbnailUrl: "https://placehold.co/286x180/FF8C33/FFFFFF" },
  { id: 20, title: "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error", thumbnailUrl: "https://placehold.co/286x180/8C33FF/FFFFFF" },
  { id: 21, title: "ad et natus qui", thumbnailUrl: "https://placehold.co/286x180/33FF8C/FFFFFF" },
  { id: 22, title: "et ea illo et sit voluptas animi blanditiis porro", thumbnailUrl: "https://placehold.co/286x180/FF3380/FFFFFF" },
  { id: 23, title: "harum velit vero totam", thumbnailUrl: "https://placehold.co/286x180/3380FF/FFFFFF" },
  { id: 24, title: "beatae officiis ut aut", thumbnailUrl: "https://placehold.co/286x180/80FF33/FFFFFF" },
  { id: 25, title: "facere non quis fuga fugit vitae", thumbnailUrl: "https://placehold.co/286x180/FF5733/FFFFFF" },
  { id: 26, title: "asperiores nobis voluptate qui", thumbnailUrl: "https://placehold.co/286x180/33FF57/FFFFFF" },
  { id: 27, title: "sit asperiores est quos quis nisi veniam error", thumbnailUrl: "https://placehold.co/286x180/3357FF/FFFFFF" },
  { id: 28, title: "non neque eligendi molestiae repudiandae illum voluptatem qui aut", thumbnailUrl: "https://placehold.co/286x180/FF33A1/FFFFFF" },
  { id: 29, title: "aut ipsam quos ab placeat omnis", thumbnailUrl: "https://placehold.co/286x180/33FFF7/FFFFFF" },
  { id: 30, title: "odio enim voluptatem quidem aut nihil illum", thumbnailUrl: "https://placehold.co/286x180/F7FF33/FFFFFF" },
  { id: 31, title: "voluptate voluptates sequi", thumbnailUrl: "https://placehold.co/286x180/FF8C33/FFFFFF" },
  { id: 32, title: "ad enim dignissimos voluptatem similique", thumbnailUrl: "https://placehold.co/286x180/8C33FF/FFFFFF" },
  { id: 33, title: "culpa ipsam nobis qui fuga magni et mollitia", thumbnailUrl: "https://placehold.co/286x180/33FF8C/FFFFFF" },
  { id: 34, title: "vitae est facere quia itaque adipisci perferendis id maiores", thumbnailUrl: "https://placehold.co/286x180/FF3380/FFFFFF" },
  { id: 35, title: "tenetur minus voluptatum et", thumbnailUrl: "https://placehold.co/286x180/3380FF/FFFFFF" },
  { id: 36, title: "expedita rerum eaque", thumbnailUrl: "https://placehold.co/286x180/80FF33/FFFFFF" },
  { id: 37, title: "totam voluptas iusto deserunt dolores", thumbnailUrl: "https://placehold.co/286x180/FF5733/FFFFFF" },
  { id: 38, title: "natus magnam iure rerum pariatur molestias dolore nisi", thumbnailUrl: "https://placehold.co/286x180/33FF57/FFFFFF" },
  { id: 39, title: "molestiae nam ullam et rerum doloribus", thumbnailUrl: "https://placehold.co/286x180/3357FF/FFFFFF" },
  { id: 40, title: "est quas voluptates dignissimos sint praesentium nisi recusandae", thumbnailUrl: "https://placehold.co/286x180/FF33A1/FFFFFF" },
  { id: 41, title: "in voluptatem doloremque cum atque architecto deleniti", thumbnailUrl: "https://placehold.co/286x180/33FFF7/FFFFFF" },
  { id: 42, title: "voluptatibus a autem molestias voluptas architecto culpa", thumbnailUrl: "https://placehold.co/286x180/F7FF33/FFFFFF" },
  { id: 43, title: "eius hic autem ad beatae voluptas", thumbnailUrl: "https://placehold.co/286x180/FF8C33/FFFFFF" },
  { id: 44, title: "neque eum provident et inventore sed ipsam dignissimos quo", thumbnailUrl: "https://placehold.co/286x180/8C33FF/FFFFFF" },
  { id: 45, title: "praesentium fugit quis aut voluptatum commodi dolore corrupti", thumbnailUrl: "https://placehold.co/286x180/33FF8C/FFFFFF" },
  { id: 46, title: "quidem maiores in quia fugit dolore explicabo occaecati", thumbnailUrl: "https://placehold.co/286x180/FF3380/FFFFFF" },
  { id: 47, title: "et soluta est", thumbnailUrl: "https://placehold.co/286x180/3380FF/FFFFFF" },
  { id: 48, title: "ut esse id", thumbnailUrl: "https://placehold.co/286x180/80FF33/FFFFFF" },
  { id: 49, title: "quasi quae est modi quis quam in impedit", thumbnailUrl: "https://placehold.co/286x180/FF5733/FFFFFF" },
  { id: 50, title: "et inventore quae ut tempore eius voluptatum", thumbnailUrl: "https://placehold.co/286x180/33FF57/FFFFFF" }
];

let productsWithPrice = [];

export function fetchProducts() {
    if (productsWithPrice.length === 0) {
        productsWithPrice = products.map((product) => {
            product.price = Math.round(Math.random() * 9000) / 100 + 10;
            return product;
        });
    }
    return productsWithPrice;
}
