import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'free cocktailes',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, harum?'
      },
      {
        icon: <FaHiking />,
        title: 'endless hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, harum?'
      },
      {
        icon: <FaShuttleVan />,
        title: 'free shuttle',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, harum?'
      },
      {
        icon: <FaBeer />,
        title: 'strongest beer',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, harum?'
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
