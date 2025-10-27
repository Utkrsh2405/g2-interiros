import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      value: '250+',
      label: 'Clients and Counseling',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      value: '90+',
      label: 'Completed Project',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      value: '500+',
      label: 'Expert Team',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      value: '$5.5M',
      label: 'Project Value',
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} p-8 text-center hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Icon/Badge */}
              <div className={`${stat.iconColor} mb-4 flex justify-center`}>
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Value */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
