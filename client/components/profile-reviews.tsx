import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";

export function ProfileReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "March 15, 2023",
      rating: 5,
      comment:
        "John is an amazing photographer! He captured our wedding beautifully and was so professional throughout the day. Highly recommend!",
    },
    {
      id: 2,
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "February 3, 2023",
      rating: 4.5,
      comment:
        "Great portrait session. John made me feel comfortable and the photos turned out better than I expected. Would book again.",
    },
    {
      id: 3,
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "January 20, 2023",
      rating: 5,
      comment:
        "Worked with John for our company event. He was punctual, professional, and delivered the photos quickly. The quality was excellent!",
    },
  ];

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{review.name}</h4>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="mb-2">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
