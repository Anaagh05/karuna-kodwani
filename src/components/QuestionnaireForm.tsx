import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";

interface QuestionnaireFormProps {
  onComplete: () => void;
}

export function QuestionnaireForm({ onComplete }: QuestionnaireFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    goals: [] as string[],
    healthConditions: "",
    dietaryRestrictions: "",
    experience: "",
    availability: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const goalOptions = [
    "Weight Management",
    "Stress Reduction",
    "Improved Flexibility",
    "Better Sleep",
    "Increased Energy",
    "Mental Clarity",
    "Personal Growth",
    "Disease Prevention",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-3xl my-8">
        <CardHeader>
          <CardTitle>Wellness Questionnaire</CardTitle>
          <CardDescription>
            Help us personalize your wellness journey by answering a few questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3>Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Gender *</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) =>
                    setFormData({ ...formData, gender: value })
                  }
                  required
                >
                  <div className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">
                        Male
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">
                        Female
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="cursor-pointer">
                        Other
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Health & Wellness Goals */}
            <div className="space-y-4">
              <h3>Your Wellness Goals</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {goalOptions.map((goal) => (
                  <div key={goal} className="flex items-center space-x-2">
                    <Checkbox
                      id={goal}
                      checked={formData.goals.includes(goal)}
                      onCheckedChange={() => toggleGoal(goal)}
                    />
                    <Label htmlFor={goal} className="cursor-pointer">
                      {goal}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Information */}
            <div className="space-y-4">
              <h3>Health Information</h3>
              <div className="space-y-2">
                <Label htmlFor="healthConditions">
                  Current Health Conditions or Concerns
                </Label>
                <Textarea
                  id="healthConditions"
                  value={formData.healthConditions}
                  onChange={(e) =>
                    setFormData({ ...formData, healthConditions: e.target.value })
                  }
                  placeholder="Please list any medical conditions, injuries, or health concerns..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dietaryRestrictions">
                  Dietary Restrictions or Allergies
                </Label>
                <Textarea
                  id="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dietaryRestrictions: e.target.value,
                    })
                  }
                  placeholder="Vegetarian, vegan, allergies, etc..."
                  rows={2}
                />
              </div>
            </div>

            {/* Experience & Availability */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="experience">
                  Previous Experience with Wellness Practices
                </Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  placeholder="Any previous experience with yoga, meditation, nutrition counseling, etc..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availability">Preferred Session Times</Label>
                <Input
                  id="availability"
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.value })
                  }
                  placeholder="e.g., Weekday mornings, Weekend afternoons"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalNotes: e.target.value })
                  }
                  placeholder="Anything else you'd like me to know..."
                  rows={3}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Submit Questionnaire
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
