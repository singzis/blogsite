import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

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

export function getSortedPostsData() {
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  return allPostsData.map(({ slug }) => {
    return {
      params: {
        slug,
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, ...slug) + ".md";
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}
