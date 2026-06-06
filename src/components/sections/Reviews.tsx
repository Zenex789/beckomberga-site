import { Suspense } from "react";
import { ReviewsColumns } from "@/components/sections/ReviewsColumns";
import type { Testimonial } from "@/components/ui/testimonials-columns-1";

// Shown when Google Places API is not configured
const fallbackTestimonials: Testimonial[] = [
  {
    text: "Fantastiskt jobb med måleriet i hela huset. Noggranna, snabba och lämnade allt perfekt städat efteråt.",
    name: "Anna L.",
    role: "Villaägare, Bromma",
    rating: 5,
  },
  {
    text: "Microcementgolvet i badrummet ser helt underbart ut. Precis den exklusiva känslan vi ville ha.",
    name: "Erik S.",
    role: "Privatperson, Hässelby",
    rating: 5,
  },
  {
    text: "Professionellt och pålitligt. De höll tiderna, kommunicerade bra och levererade utöver förväntningarna.",
    name: "Maria K.",
    role: "Bostadsrättsinnehavare",
    rating: 5,
  },
  {
    text: "Snickeriarbetet är av absolut toppkvalitet. Vi anlitar dem igen utan tvekan — rekommenderas varmt.",
    name: "Johan B.",
    role: "Husägare, Vällingby",
    rating: 5,
  },
  {
    text: "Fixade fönster och dörrar perfekt. Snabbt, rent och professionellt utfört. Mer än nöjd!",
    name: "Karin M.",
    role: "Villaägare, Spånga",
    rating: 5,
  },
  {
    text: "Mycket nöjd med golvslipningen. Parkettgolvet ser ut som nytt och vi sparade en massa jämfört med byte.",
    name: "Peter A.",
    role: "Privatperson, Bromma",
    rating: 5,
  },
  {
    text: "Bästa hantverkarna vi anlitat på 20 år. Rekommenderas varmt till alla i Västerort och omnejd.",
    name: "Lisa T.",
    role: "Husägare, Hässelby",
    rating: 5,
  },
  {
    text: "Målade om hela lägenheten på rekordtid. Resultatet är fantastiskt och priset var helt rimligt.",
    name: "David H.",
    role: "Privatperson, Bromma",
    rating: 5,
  },
  {
    text: "Superb kvalitet på allt arbete, håller tidsplaner och är lätta att kommunicera med. Topp!",
    name: "Sara N.",
    role: "Bostadsrättsinnehavare, Västerort",
    rating: 5,
  },
];

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface PlacesResult {
  rating?: number;
  user_ratings_total?: number;
  reviews?: GoogleReview[];
}

async function fetchReviews(): Promise<PlacesResult | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${key}&language=sv`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return data.result ?? null;
  } catch {
    return null;
  }
}

async function ReviewsContent() {
  const data = await fetchReviews();

  if (data?.reviews?.length) {
    const testimonials: Testimonial[] = data.reviews.map((r) => ({
      text: r.text,
      image: r.profile_photo_url,
      name: r.author_name,
      role: r.relative_time_description,
      rating: r.rating,
    }));

    return (
      <ReviewsColumns
        testimonials={testimonials}
        rating={data.rating ?? 4.9}
        count={data.user_ratings_total ?? 0}
        fromGoogle={true}
      />
    );
  }

  // Fallback: show curated testimonials with static aggregate score
  return (
    <ReviewsColumns
      testimonials={fallbackTestimonials}
      rating={4.9}
      count={61}
      fromGoogle={false}
    />
  );
}

export default function Reviews() {
  return (
    <Suspense>
      <ReviewsContent />
    </Suspense>
  );
}
