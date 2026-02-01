import React from 'react';
import styled from 'styled-components';

const Card = ({props}) => {
  return (
    <StyledWrapper>
      <div className="card cursor-pointer">
        <div className="image" style={{backgroundImage: `url(${props.image})`}} />
        <div className="content">
            <div className='flex justify-between'>
                <p className='text-xs text-gray-500'>{props.published_at.split('T')[0]}</p>
                <a href={props.url} className='text-xs text-gray-500'>{props.source}</a>
            </div>
          <a href={props.url}>
            <span className="title">
              {props.title.slice(0, 50)}...
            </span>
          </a>
          <p className="desc">
            {props.description.slice(0, 100)}... 
          </p>
          <a className="action" href={props.url}>
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
    border-radius: 1rem;
    background-color: black;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    margin-bottom: -60px;
  }

  .card a {
    text-decoration: none
  }

  .content {
    padding: 1.1rem;
  }

  .image {
    object-fit: contain;
    width: 298px;
    height: 200px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: rgb(239, 205, 255);
  }

  .title {
    color: white;
    font-size: 1.1rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563EB;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: .3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }`;

export default Card;
