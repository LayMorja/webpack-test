// import { getViews } from './analytics';
import WebpackLogo from './files/image.jpg';
import Post from './Post';
import './styles/styles.css';

const post = new Post('WebPack Post', WebpackLogo);
console.log('Post: ', post.toString());

console.log('Image: ', WebpackLogo);
