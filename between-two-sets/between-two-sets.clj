(defn
  filter-mid-ns
  [left-ns, right-ns, mid-ns]
  (filter
   (fn [mid-n]
     (and
      (every? (fn [left-n] (= 0 (mod mid-n left-n))) left-ns)
      (every? (fn [right-n] (= 0 (mod right-n mid-n))) right-ns)))
   mid-ns))

(defn getTotalX [left-ns right-ns]
  (let [first-mid-n (last left-ns)
        last-mid-n (first right-ns)
        mid-ns (range first-mid-n (inc last-mid-n) first-mid-n)
        filtered-mid-ns (filter-mid-ns left-ns right-ns mid-ns)]
    (count filtered-mid-ns)))