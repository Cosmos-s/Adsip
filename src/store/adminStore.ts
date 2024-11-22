import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdminStore {
  settings: {
    notifyWinners: boolean;
    autoPayouts: boolean;
    maxSpinsPerIP: number;
    paymentMethods: {
      upi: boolean;
      bankTransfer: boolean;
    };
  };
  websiteContent: {
    hero: {
      title: string;
      subtitle: string;
      ctaText: string;
    };
    services: Array<{
      id: string;
      icon: string;
      title: string;
      description: string;
    }>;
    portfolio: Array<{
      id: string;
      title: string;
      description: string;
      image: string;
    }>;
  };
  campaigns: Array<{
    id: string;
    name: string;
    status: 'active' | 'scheduled' | 'ended';
    wheel: {
      spinDuration: number;
      spinRevolutions: number;
      prizes: Array<{
        option: string;
        value: number;
        probability: number;
        backgroundColor: string;
        textColor: string;
      }>;
    };
    theme: {
      primaryColor: string;
      secondaryColor: string;
    };
    advertiser: {
      name: string;
      instagram: string;
      tagline: string;
      media: string[];
    };
    participants: number;
    winners: number;
    createdAt: string;
  }>;
  updateSettings: (settings: AdminStore['settings']) => void;
  updateWebsiteContent: (content: AdminStore['websiteContent']) => void;
  addCampaign: (campaign: AdminStore['campaigns'][0]) => void;
  updateCampaign: (id: string, campaign: Partial<AdminStore['campaigns'][0]>) => void;
  deleteCampaign: (id: string) => void;
}

export const useAdminStore = create<AdminStore>()(
  persist(
    (set) => ({
      settings: {
        notifyWinners: true,
        autoPayouts: false,
        maxSpinsPerIP: 1,
        paymentMethods: {
          upi: true,
          bankTransfer: false,
        },
      },
      websiteContent: {
        hero: {
          title: 'Turn Every Cup into an Advertising Opportunity',
          subtitle: 'We transform ordinary paper cups into powerful marketing tools.',
          ctaText: 'Start Your Campaign',
        },
        services: [
          {
            id: '1',
            icon: 'Coffee',
            title: 'Cup Advertising',
            description: 'Strategic placement of your ads on paper cups.',
          },
          // Add more default services...
        ],
        portfolio: [
          {
            id: '1',
            title: 'Cafe Connect Campaign',
            description: 'City-wide coffee shop campaign reaching 50,000+ customers',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
          },
          // Add more default portfolio items...
        ],
      },
      campaigns: [],
      updateSettings: (newSettings) =>
        set((state) => ({ settings: { ...state.settings, ...newSettings } })),
      updateWebsiteContent: (newContent) =>
        set((state) => ({ websiteContent: { ...state.websiteContent, ...newContent } })),
      addCampaign: (campaign) =>
        set((state) => ({ campaigns: [...state.campaigns, campaign] })),
      updateCampaign: (id, updatedCampaign) =>
        set((state) => ({
          campaigns: state.campaigns.map((c) =>
            c.id === id ? { ...c, ...updatedCampaign } : c
          ),
        })),
      deleteCampaign: (id) =>
        set((state) => ({
          campaigns: state.campaigns.filter((c) => c.id !== id),
        })),
    }),
    {
      name: 'admin-store',
    }
  )
);