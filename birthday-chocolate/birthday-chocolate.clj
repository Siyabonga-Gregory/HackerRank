(defn birthday [choc-ns target-sum target-length]
  (let [max-i (count choc-ns)
        indexes (range max-i)]
    (->> (range (count choc-ns))
         (filter
          (fn [i]
            (let [slice-end (if (> (+ i target-length) max-i) max-i (+ i target-length))
                  slice (subvec choc-ns i slice-end)
                  sum (reduce + slice)]
              (= sum target-sum))))
         count)))