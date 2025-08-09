'use client';

import { useEffect, useState } from 'react';

export default function TOCSidebar({ sections }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );

    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-24">
      <div className="border rounded-xl p-5 bg-white">
        <p className="text-sm font-medium text-gray-700 mb-3">On this page</p>
        <ul className="space-y-2 text-sm">
          {sections.map(([href, label]) => {
            const isActive = activeId === href;
            return (
              <li key={href}>
                <a
                  href={`#${href}`}
                  className={`block rounded px-2 py-1 transition
                    ${isActive ? 'text-blue-700 bg-blue-50 border-l-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}
                  `}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
