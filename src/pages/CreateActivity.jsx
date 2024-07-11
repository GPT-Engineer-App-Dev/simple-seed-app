import { useForm } from "react-hook-form";
import { useAddActivity } from "@/integrations/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CreateActivity = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const { mutate: addActivity, isLoading, error } = useAddActivity();

  const activityTypes = ["run", "ride", "swim"];

  const onSubmit = (data) => {
    addActivity(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Create Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="type">Type</Label>
            <Select onValueChange={(value) => setValue("type", value)}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select activity type" />
              </SelectTrigger>
              <SelectContent>
                {activityTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="started_at">Started At</Label>
            <Input id="started_at" type="datetime-local" {...register("started_at", { required: true })} />
          </div>
          <div>
            <Label htmlFor="ended_at">Ended At</Label>
            <Input id="ended_at" type="datetime-local" {...register("ended_at", { required: true })} />
          </div>
          <div>
            <Label htmlFor="distance">Distance (meters)</Label>
            <Input id="distance" type="number" {...register("distance", { required: true })} />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Activity"}
          </Button>
          {error && <p className="text-red-500">{error.message}</p>}
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateActivity;