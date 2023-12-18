import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'


// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient({
    projectId: 'h75norx0',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
});

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
    return builder.image(source);
}