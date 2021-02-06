import React, { useState } from 'react'
import people from '../data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = people[index];

    const next = () => setIndex(index < people.length - 1 ? index + 1 : 0);
    const prev = () => setIndex(index > 0 ? index - 1 : people.length - 1);

    // console.log(index);

    // to chec number 
    const checkNumber = number => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }
    //random person function
    const suprise = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index) {
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber));
    }
    return (
        <div className='review' key={id}>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p>{text}</p>
            <div className="arrows">
                <button className='btn'><FaChevronLeft onClick={prev} /></button>
                <button className='btn'><FaChevronRight onClick={next} /></button>
            </div>
            <button className='supriseMe' onClick={suprise}>Suprise me</button>
        </div>
    )
}

export default Review
