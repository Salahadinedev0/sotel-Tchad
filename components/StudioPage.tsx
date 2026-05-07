import React from 'react'
import { Studio } from 'sanity'
import config from '../sanity.config'

export const StudioPage: React.FC = () => {
  const currentUrl = window.location.href;
  
  return (
    <div className="flex flex-col h-screen w-screen bg-slate-900">
      <div className="bg-slate-800 text-white p-2 text-xs flex justify-between items-center px-4 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>Sanity Studio Mode</span>
        </div>
        <a 
          href={currentUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/20 hover:bg-primary/40 text-primary-foreground px-3 py-1 rounded border border-primary/30 transition-all font-bold"
        >
          Ouvrir dans un nouvel onglet (Recommandé)
        </a>
      </div>
      <div className="flex-grow relative">
        <Studio config={config} />
      </div>
    </div>
  )
}
