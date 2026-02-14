
export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  category?: string;
  specs?: {
    ram?: string;
    cpu?: string;
    storage?: string;
    extras?: string[];
  };
}

// Added AdvisorRecommendation interface to resolve missing member errors in dependent files
export interface AdvisorRecommendation {
  planId: string;
  reasoning: string;
  suggestedScale: string;
}
