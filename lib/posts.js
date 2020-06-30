import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import findIndex from "lodash/findIndex";

const postsDirectory = path.join(process.cwd(), "posts");
// Get file names under /posts
const fileNames = fs.readdirSync(postsDirectory);
const allPostsData = [];
const getAllPostsData = (fileNames, dir) => {
    fileNames.forEach((fileName) => {
        if (fileName.indexOf(".md") < 0) {
            const pathname = path.join(postsDirectory, dir, fileName); // 文件所在绝对路径，用来读取子文件
            const _dir = path.join(dir, fileName); // 文件在posts下的路径
            const _fileNames = fs.readdirSync(pathname);
            getAllPostsData(_fileNames, _dir);
        } else {
            const id = fileName.replace(/\.md$/, "");
            const fullPath = path.join(postsDirectory, dir, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            const obj = {
                id,
                slug: dir ? [...dir.split("/"), id] : [id],
                ...matterResult.data,
            };
            allPostsData.push(obj);
        }
    });
};

getAllPostsData(fileNames, "");

const getSortedPostsData = () => {
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const sortedPostsData = getSortedPostsData();

export const getAllPostIds = () => {
    return allPostsData.map(({ slug }) => {
        return {
            params: {
                slug,
            },
        };
    });
};

export const getPostData = async(slug) => {
    const fullPath = path.join(postsDirectory, ...slug) + ".md";
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processContent.toString();

    const index = findIndex(sortedPostsData, (post) => {
        return post.slug.join("/") === slug.join("/");
    });

    const nearPosts = {
        nextPost: sortedPostsData[index - 1] ? sortedPostsData[index - 1] : null,
        prevPost: sortedPostsData[index + 1] ? sortedPostsData[index + 1] : null,
    };
    return {
        nearPosts,
        contentHtml,
        ...matterResult.data,
    };
};