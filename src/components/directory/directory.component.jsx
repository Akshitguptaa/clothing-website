import { Route } from "react-router-dom";
import DirectoryItem from "../directory-item/directory-item.components";
import { DirectoryContainer } from "./directory.styles";

const categories = [
    {
        id: 1,
        title: "Hats",
        imageUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        route: 'shop/hats',
    },
    {
        id: 2,
        title: "Jackets",
        imageUrl: "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        route: 'shop/jackets',
    },
    {
        id: 3,
        title: "Sneakers",
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg",
        route: 'shop/sneakers',
    },
    {
        id: 4,
        title: "Womens",
        imageUrl: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        route: 'shop/womens',
    },
    {
        id: 5,
        title: "Mens",
        imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        route: 'shop/mens',
    },
];


const Directory = () => {
    return (
        <DirectoryContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory;