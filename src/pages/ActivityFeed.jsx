import { useActivities } from "@/integrations/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

const ActivityFeed = () => {
  const { data: activities, error, isLoading } = useActivities();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading activities</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Activity Feed</h1>
      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors">
            <CardHeader className="bg-blue-200 text-blue-900">
              <CardTitle>{activity.type}</CardTitle>
            </CardHeader>
            <CardContent className="bg-blue-100 text-blue-800">
              <p>Distance: {activity.distance} meters</p>
              <p>Started: {formatDistanceToNow(new Date(activity.started_at))} ago</p>
              <p>Ended: {formatDistanceToNow(new Date(activity.ended_at))} ago</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;