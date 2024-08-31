import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
            {
                itemImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                thumbnailImageSrc: 'https://s3.amazonaws.com/RudraCentre/ProductImages/Puja/Hrit-Padma-Balancing-Puja-and-Mantra-Japa-for-wealth-and-prosperity.jpg',
                alt: 'Description for Image',
                title: 'Title'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};