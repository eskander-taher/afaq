import React from 'react';
import { stats } from '../../data/stats';
import AnimatedCounter from '../ui/AnimatedCounter';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-royal-blue">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <AnimatedCounter
                end={stat.value}
                prefix={stat.prefix || ''}
                suffix={stat.suffix || ''}
                className="text-5xl font-bold text-gold block mb-2 font-bukra"
              />
              <span className="text-white text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;