const { createAndAssignAuthorReference } = require("../display")

describe("createAndAssignAuthorReference", () => {
    const articles = [{
        article_id: 1,
        author: "jessjelly",
        comment_count: 8,
        created_at: "2020-11-07T06:03:00.000Z",
        title: "Running a Node App",
        topic: "coding",
        votes: 0
    },
    {
        article_id: 21,
        author: "tickle122",
        comment_count: 8,
        created_at: "2020-10-26T10:05:00.000Z",
        title: "Agility Training Drills For Football Players",
        topic: "football",
        votes: 0
    }];
    const users = [{
        avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
        name: "Jess Jelly",
        username: "jessjelly"
    },
    {
        avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
        name: "Tom Tickle",
        username: "tickle122"
    }
    ];
    it("should return an array of articles with the authorName property", () => {
        const result = createAndAssignAuthorReference(articles, users);
        expect(result).toEqual([
            {
                article_id: 1,
                author: "jessjelly",
                authorName: "Jess Jelly",
                comment_count: 8,
                created_at: "2020-11-07T06:03:00.000Z",
                title: "Running a Node App",
                topic: "coding",
                votes: 0
            },
            {
                article_id: 21,
                author: "tickle122",
                authorName: "Tom Tickle",
                comment_count: 8,
                created_at: "2020-10-26T10:05:00.000Z",
                title: "Agility Training Drills For Football Players",
                topic: "football",
                votes: 0
            }
        ])
    })
    it("should throw an error if either articles or users is not an array", () => {
        expect(() => createAndAssignAuthorReference("not an array", users))
            .toThrow("Invalid input: both articles and users must be arrays");
        expect(() => createAndAssignAuthorReference(articles, "not an array"))
            .toThrow("Invalid input: both articles and users must be arrays");
    });
    it("should throw an error if either articles or users do not contain the required properties", () => {
        expect(() => createAndAssignAuthorReference([{
            not_an_id: 1,
            not_an_author: "jessjelly"
        }], users))
            .toThrow("Invalid input: articles must contain article_id (number) and author (string) properties");
        expect(() => createAndAssignAuthorReference(articles, [{
            not_a_username: "jessjelly",
            not_a_name: "Jess Jelly"
        }]))
            .toThrow("Invalid input: users must contain username (string) and name (string) properties");
    });
})