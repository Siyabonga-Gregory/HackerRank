(defn get-next-multiple [denominator integer]
  (let [curr-int (inc integer)]
    (if (= 0 (mod curr-int denominator))
      curr-int
      (get-next-multiple denominator curr-int))))

(defn gradingStudents [grades]
  (map
   (fn [grade]
     (let [next-five-multiple (get-next-multiple 5 grade)
           should-ret-grade? (or (< grade 38)
                                 (>= (- next-five-multiple grade) 3))]
       (if should-ret-grade? grade next-five-multiple)))
   grades))