"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export default function Instructors() {
  const [instructors, setInstructors] = useState<any[]>([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      const { data, error } = await supabase.from("instructors").select("*");
      if (data) setInstructors(data);
    };
    fetchInstructors();
  }, []);

  return (
    <section className="bg-linen border-b border-grid">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-grid">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="group relative h-[400px] overflow-hidden cursor-pointer"
          >
            {/* Image  */}
              {instructor?.image_url && (
                <Image
                  fill
                  src={instructor.image_url}
                  alt={instructor.name}
                  className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                />
              )}

            {/* Overlay Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-heading font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {instructor.name}
              </h3>
              <p className="font-body text-sm text-white/80 uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {instructor.specialty}
              </p>
            </div>

            {/* Default Visible Name (Hidden on Hover) */}
            <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-2xl font-heading font-bold text-ink bg-white/80 backdrop-blur-sm px-4 py-2">
                {instructor.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
