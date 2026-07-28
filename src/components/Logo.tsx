import React from 'react';
import logoImagePath from '../assets/images/logo_luna_osito_1785251209327.jpg';
import heroClassroomPath from '../assets/images/hero_classroom_happy_1785251223264.jpg';
import recrearteArtPath from '../assets/images/recrearte_art_workshop_1785251237531.jpg';
import outdoorGardenPath from '../assets/images/outdoor_playground_garden_1785251250549.jpg';
import inclusiveCarePath from '../assets/images/inclusive_specialist_care_1785251264883.jpg';

export {
  logoImagePath,
  heroClassroomPath,
  recrearteArtPath,
  outdoorGardenPath,
  inclusiveCarePath,
};

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  lightText?: boolean;
  isMobileCompact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  lightText = false,
  isMobileCompact = false,
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
    xl: 'w-16 h-16 sm:w-20 sm:h-20',
  };

  const textSizes = {
    sm: 'text-xs sm:text-sm',
    md: 'text-sm sm:text-base font-bold',
    lg: 'text-lg sm:text-xl font-bold',
    xl: 'text-2xl font-bold',
  };

  const subTextSizes = {
    sm: 'text-[10px]',
    md: 'text-[11px] sm:text-xs',
    lg: 'text-xs sm:text-sm',
    xl: 'text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Moon & Bear Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 rounded-full bg-white shadow-xs border border-sky-100 p-0.5 overflow-hidden ${sizeClasses[size]}`}>
        <img
          src={logoImagePath}
          alt="Logotipo Oficial C.E.I.P. Batalla de Taguanes"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center leading-tight">
          <span
            className={`font-sans font-bold tracking-tight text-slate-900 ${textSizes[size]} ${
              lightText ? 'text-white' : 'text-slate-900'
            }`}
          >
            {isMobileCompact ? (
              <>
                <span className="hidden sm:inline">C.E.I.P. Batalla de Taguanes</span>
                <span className="inline sm:hidden">Batalla de Taguanes</span>
              </>
            ) : (
              'C.E.I.P. Batalla de Taguanes'
            )}
          </span>
          <span
            className={`font-medium ${subTextSizes[size]} ${
              lightText ? 'text-sky-200' : 'text-sky-700'
            }`}
          >
            La Nana de Mis Sueños
          </span>
        </div>
      )}
    </div>
  );
};

