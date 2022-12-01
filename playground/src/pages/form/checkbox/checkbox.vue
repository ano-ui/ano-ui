<script setup lang="ts">
const checked = ref(false)
const checked2 = ref(0)
const checked3 = ref('yes')
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Color
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked" />
        <ACheckbox v-model="checked" color="success" />
        <ACheckbox v-model="checked" color="info" />
        <ACheckbox v-model="checked" color="warning" />
        <ACheckbox v-model="checked" color="danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked" color="primary" size="xs">
          Extra Mini
        </ACheckbox>
        <ACheckbox v-model="checked" color="success" size="sm">
          Mini
        </ACheckbox>
        <ACheckbox v-model="checked" color="info" size="md">
          Small
        </ACheckbox>
        <ACheckbox v-model="checked" color="warning" size="lg">
          Medium
        </ACheckbox>
        <ACheckbox v-model="checked" color="danger" size="xl">
          Large
        </ACheckbox>
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked" variant="solid" />
        <ACheckbox v-model="checked" color="success" variant="outline" />
        <ACheckbox v-model="checked" color="info" variant="ghost" />
        <ACheckbox v-model="checked" color="warning" variant="light" />
        <ACheckbox v-model="checked" color="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox :model-value="true" loading />
        <ACheckbox v-model="checked" color="success" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ACheckbox v-model="checked2" :active-value="1" active-label="1" :inactive-value="0" inactive-label="0" />
        <ACheckbox v-model="checked2" cc="rounded-full" :active-value="1" active-label="1" :inactive-value="0" inactive-label="0" />
        <ACheckbox v-model="checked3" active-value="yes" active-label="yes" inactive-value="no" inactive-label="no" />
        <ACheckbox v-model="checked" custom-icon>
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ACheckbox>
      </div>
    </div>
  </UBasePage>
</template>
