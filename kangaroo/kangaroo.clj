(defn kangaroo [x-loc, x-jump, y-loc, y-jump]
  (let [[behind-jump, ahead-jump]
        (if (< x-loc y-loc) [x-jump y-jump] [y-jump x-jump])
        is-no? (>= ahead-jump behind-jump)
        [behind, ahead] (sort [x-loc y-loc])
        get-is-yes? (fn get-is-yes? [curr-behind curr-ahead]
                      (if (<= curr-ahead curr-behind)
                        (= curr-ahead curr-behind)
                        (get-is-yes?
                         (+ curr-behind behind-jump)
                         (+ curr-ahead ahead-jump))))]
    (cond
      is-no? "NO"
      (get-is-yes? behind ahead) "YES"
      :else "NO")))