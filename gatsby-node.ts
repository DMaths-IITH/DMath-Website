import {FirebaseUtils} from './src/utils/FirebaseUtils';
import { GatsbyNode } from 'gatsby';
import * as path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage } }) => {
    const allPages = (await FirebaseUtils.getPageData("pages","pages")) as Object;
    console.log(allPages);
    const _pages = Object.keys(allPages);
    _pages.forEach(async page  => {
        const _page_data = (await FirebaseUtils.getPageData("pages",page) as Object);
        createPage({
            path: (page.split("-")).join("/"),
            component: path.resolve(allPages[page]),
            context: {
                page: page,
                current_data: _page_data
            }
        })
    });
}