
export type EventType = 'page_view' | 'cta_click' | 'form_submit' | 'error';

interface AnalyticsEvent {
  type: EventType;
  label: string;
  timestamp: number;
  metadata?: Record<string, any>;
}

class AnalyticsService {
  private events: AnalyticsEvent[] = [];
  private listeners: ((event: AnalyticsEvent) => void)[] = [];

  constructor() {
    const saved = localStorage.getItem('sotel_analytics');
    if (saved) {
      try {
        this.events = JSON.parse(saved);
      } catch (e) {
        this.events = [];
      }
    }
  }

  track(type: EventType, label: string, metadata?: Record<string, any>) {
    const event: AnalyticsEvent = {
      type,
      label,
      timestamp: Date.now(),
      metadata,
    };
    
    this.events.push(event);
    this.listeners.forEach(l => l(event));
    this.save();
    
    console.debug(`[Analytics] Tracked: ${type} - ${label}`, metadata);
  }

  private save() {
    // Garder seulement les 100 derniers événements pour le localStorage
    const toSave = this.events.slice(-100);
    localStorage.setItem('sotel_analytics', JSON.stringify(toSave));
  }

  getEvents() {
    return this.events;
  }

  onEvent(callback: (event: AnalyticsEvent) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  getStats() {
    const stats = {
      views: {} as Record<string, number>,
      clicks: {} as Record<string, number>,
      total: this.events.length
    };

    this.events.forEach(e => {
      if (e.type === 'page_view') {
        stats.views[e.label] = (stats.views[e.label] || 0) + 1;
      } else if (e.type === 'cta_click') {
        stats.clicks[e.label] = (stats.clicks[e.label] || 0) + 1;
      }
    });

    return stats;
  }
}

export const analytics = new AnalyticsService();
