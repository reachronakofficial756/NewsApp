import React from 'react';
import styled from 'styled-components';

const Card = ({ props }) => {
    return (
        <StyledWrapper>
            <div className="card cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all rounded-2xl overflow-hidden">
                <div className="image" style={{ backgroundImage: `url(${props.image})` }} />
                <div className="content p-4">
                    <div className='flex justify-between mb-2'>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>{props.published_at.split('T')[0]}</p>
                        <a href={props.url} className='text-xs text-teal-600 dark:text-teal-400 font-medium hover:underline'>{props.source}</a>
                    </div>
                    <a href={props.url}>
                        <span className="title text-gray-900 dark:text-white font-bold text-lg leading-tight hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                            {props.title.slice(0, 50)}...
                        </span>
                    </a>
                    <p className="desc mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {props.description.slice(0, 100)}...
                    </p>
                    <a className="action mt-4 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all" href={props.url}>
                        Find out more
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    margin-bottom: -60px;
  }

  .image {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 200px;
    background-color: #f3f4f6;
  }

  .action span {
    transition: .3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }`;

export default Card;
