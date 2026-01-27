import React, {useState} from "react";
import { UserRound } from "lucide-react";

const Team = ({ team }) => {
  const [error, setError] = useState(false);
  return (
    <section id="team" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-emerald-900 mb-4">
            Meet Our Team
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">
            The locals who make your journey special
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-emerald-500 transition-colors">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  {!error ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={() => setError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserRound className="w-40 h-40 text-gray-400 -ml-2" />
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-emerald-700 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
