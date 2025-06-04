'use client';
import React from 'react';

interface BranchLocation {
  name: string;
  embedUrl: string;
  coordinates: string;
}

interface MapPageProps {
  selectedBranchName?: string;
}

const branchLocations: Record<string, BranchLocation> = {
  "Mekelle": {
    name: "Mekelle",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3879.6159934684724!2d39.4576870750857!3d13.497743986868146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI5JzUxLjkiTiAzOcKwMjcnMzYuOSJF!5e0!3m2!1sen!2set!4v1749022941059!5m2!1sen!2set",
    coordinates: "13.497744, 39.457687"
  },
  "Bole": {
    name: "Bole",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15762.740140849703!2d38.81008465!3d9.001101599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2set!4v1749022837148!5m2!1sen!2set",
    coordinates: "9.001102, 38.810085"
  },
  "Sarbet": {
    name: "Sarbet",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7774880313023!2d38.7325545!3d8.992611599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b87eedece3623%3A0x936aa739f7ec4476!2zRmFuYSB0cmFkaXRpb25hbCBzdGVhbSDhjYvhipMg4Yuo4YuI4Yut4YmjIOGMouGItSAo4Yyh4Yi9KQ!5e0!3m2!1sen!2set!4v1749022916291!5m2!1sen!2set",
    coordinates: "8.992612, 38.732555"
  },
  "Meri": {
    name: "Meri",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15762.740140849703!2d38.81008465!3d9.001101599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2set!4v1749022884738!5m2!1sen!2set",
    coordinates: "9.001102, 38.810085"
  }
};

const DEFAULT_BRANCH = "Bole";

const MapPage: React.FC<MapPageProps> = ({ selectedBranchName }) => {
  // Normalize the branch name (trim and capitalize first letter)
  const normalizedBranchName = selectedBranchName 
    ? selectedBranchName.trim().charAt(0).toUpperCase() + selectedBranchName.trim().slice(1).toLowerCase()
    : DEFAULT_BRANCH;

  // Safely get the branch or fallback to default
  const selectedBranch = branchLocations[normalizedBranchName] || branchLocations[DEFAULT_BRANCH];

  // Debugging logs
  React.useEffect(() => {
  }, [selectedBranch]);

  return (
    <div className="w-full">
      <div className="p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">{selectedBranch.name} Branch</h2>
      </div>
      
      <iframe
        src={selectedBranch.embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Google Maps - ${selectedBranch.name}`}
      />
    </div>
  );
};

export default MapPage;