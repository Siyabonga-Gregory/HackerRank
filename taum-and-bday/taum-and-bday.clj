;; https://www.hackerrank.com/challenges/taum-and-bday/problem

(defn taumBday [b-freq w-freq b-cost-init w-cost-init conversion-cost]
  (let [b-cost (min b-cost-init (+ w-cost-init conversion-cost))
        w-cost (min w-cost-init (+ b-cost-init conversion-cost))]
    (+ (* b-freq b-cost) (* w-freq w-cost))))

