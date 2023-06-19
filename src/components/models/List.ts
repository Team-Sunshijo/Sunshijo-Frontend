export interface ListProps {
      date: string;
      grade_class: string;
      subject: string;
      teacher: string;
}

export interface PlanWListProps {
      date: string;
      reason: string;
      request_teacher: string;
      middle_teacher: string;
}

export interface ReinforcementListProps {
      date: string;
      lesson: string;
      grade_class: string;
      missing_subjects: string;
      reinforcement_plan: string;
      reinforcement_teacher: string;
}

export interface ClassChangeListProps {
      date: string;
      lesson: string;
      grade_class: string;
      subject_replace: string;
      change_date: string;
      change_lesson: string;
      change_grade_class: string;
      replace_subject: string;
      charge_teacher: string;
}
