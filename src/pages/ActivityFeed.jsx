import { useActivities } from "@/integrations/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";

const ActivityFeed = () => {
  const { data: activities, error, isLoading } = useActivities();
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    if (activities) {
      setActivityList(activities);
    }
  }, [activities]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading activities</div>;

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(activityList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setActivityList(items);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Activity Feed</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="activities">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {activityList.map((activity, index) => (
                <Draggable key={activity.id} draggableId={activity.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card className="bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors">
                        <CardHeader className="bg-blue-200 text-blue-900">
                          <CardTitle>{activity.type}</CardTitle>
                        </CardHeader>
                        <CardContent className="bg-blue-100 text-blue-800">
                          <p>Distance: {activity.distance} meters</p>
                          <p>Started: {formatDistanceToNow(new Date(activity.started_at))} ago</p>
                          <p>Ended: {formatDistanceToNow(new Date(activity.ended_at))} ago</p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ActivityFeed;