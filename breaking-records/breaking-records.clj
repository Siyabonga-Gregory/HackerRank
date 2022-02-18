(defn breakingRecords [scores]
  (let [records-start
        {:high (first scores)  :low (first scores) :new-highs 0 :new-lows 0}
        records (reduce
                 (fn
                   [{h :high, l :low, new-hs :new-highs, new-ls :new-lows} s]
                   {:high (if (> s h) s h)
                    :low (if (< s l) s l)
                    :new-highs (if (> s h) (inc new-hs) new-hs)
                    :new-lows (if (< s l) (inc new-ls) new-ls)})
                 records-start
                 scores)]
    [(get records :new-highs) (get records :new-lows)]))
